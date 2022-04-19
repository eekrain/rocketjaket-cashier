/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useMemo, useEffect, useState} from 'react';
import {Box, VStack} from 'native-base';
import {useInventory_GetAllVariantMetadataQuery} from '../../graphql/gql-generated';
import {
  Control,
  useFieldArray,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import {RHCheckbox, RHSelect} from '../../shared/components';
import {IProductInventoryDefaultValues} from './types';

interface Props {
  control: Control<IProductInventoryDefaultValues>;
  errors: any;
  setValue: UseFormSetValue<IProductInventoryDefaultValues>;
}

const ProductSelectVariation = ({control, errors, setValue}: Props) => {
  const [isDataReady, setDataReady] = useState(false);
  const enabled_variations = useWatch({control, name: 'enabled_variations'});
  const variation_values = useWatch({control, name: 'variation_values'});

  const {fields, append, remove} = useFieldArray({
    name: 'variation_values',
    control,
  });

  const getAllVariantMetadata = useInventory_GetAllVariantMetadataQuery();

  const allVariantMetadata = useMemo(() => {
    return (
      getAllVariantMetadata.data?.rocketjaket_inventory_variant_metadata || []
    );
  }, [getAllVariantMetadata.data?.rocketjaket_inventory_variant_metadata]);

  const variantCheckboxOptions = useMemo(() => {
    const map = new Map();
    for (const item of allVariantMetadata) {
      if (!map.has(item.variant_title)) {
        map.set(item.variant_title, true); // set any value to Map
      }
    }
    const distinct: {value: string; label: string}[] = [];
    map.forEach((_v, mappedTitle) => {
      distinct.push({value: mappedTitle, label: mappedTitle});
    });
    return distinct;
  }, [allVariantMetadata]);

  useEffect(() => {
    if (isDataReady === false && variantCheckboxOptions.length > 0) {
      setValue(
        'variation_values',
        variantCheckboxOptions.map(variation => {
          return {variation_title: variation.value};
        }),
      );
      setDataReady(true);
    }
  }, [isDataReady, setValue, variantCheckboxOptions]);

  return (
    <Box>
      <RHCheckbox
        control={control}
        errors={errors}
        label="Variasi Produk"
        name="enabled_variations"
        checkboxOptions={variantCheckboxOptions}
        flexDirection="row"
        flexWrap="wrap"
        checkboxSpacing={5}
      />
      <VStack w="full" mt="4" space="2">
        {fields.map((field, index) => {
          const selectOptions = allVariantMetadata
            .filter(variant => variant.variant_title === field.variation_title)
            .map(variant => ({
              value: variant.id.toString(),
              label: variant.variant_value,
            }));
          const isEnabled = enabled_variations.find(
            title => title === field.variation_title,
          );
          if (isEnabled) {
            return (
              <RHSelect
                key={`${index}${field.variation_title}`}
                selectOptions={selectOptions}
                name={`variation_values.${index}.variant_metadata_id`}
                control={control}
                errors={errors}
                label={`Pilih ${field.variation_title}`}
              />
            );
          }
        })}
      </VStack>
    </Box>
  );
};

export default ProductSelectVariation;
