import React from 'react';
import {Box, Text} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {useWindowDimensions} from 'react-native';

export interface IDataSimpleGrid {
  title: string;
  value?: string | React.ComponentType<any> | null;
  rowHeight?: number;
}
interface Props {
  gridWidth?: number | 'full';
  titleWidthRatio?: number;
  dividerWidthRatio?: number;
  valueWidthRatio?: number;
  rowHeight?: number;
  data: IDataSimpleGrid[];
}

export const SimpleDataGrid = ({
  gridWidth = 'full',
  titleWidthRatio = 0.8,
  dividerWidthRatio = 0.2,
  valueWidthRatio = 1,
  rowHeight = 30,
  data,
}: Props) => {
  const window = useWindowDimensions();

  const finalGridWidth = gridWidth === 'full' ? window.width - 40 : gridWidth;

  const totalHeight = data.reduce(
    (prev, curr) => (curr.rowHeight ? prev + curr.rowHeight : prev + rowHeight),
    0,
  );

  return (
    <Box height={totalHeight}>
      <Grid style={{width: finalGridWidth}}>
        {data &&
          data.map(val => (
            <Row key={val.title + val.value}>
              <Col size={titleWidthRatio}>
                <Text>{val.title}</Text>
              </Col>
              <Col size={dividerWidthRatio}>
                <Text>:</Text>
              </Col>
              <Col size={valueWidthRatio}>
                {typeof val.value === 'string' ? (
                  <Text>{val.value}</Text>
                ) : typeof val.value === 'function' ? (
                  <val.value />
                ) : null}
              </Col>
            </Row>
          ))}
      </Grid>
    </Box>
  );
};

export default SimpleDataGrid;
