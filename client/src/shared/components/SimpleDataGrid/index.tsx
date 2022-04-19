import React from 'react';
import {Text} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';

interface Props {
  gridWidth?: number;
  titleWidthRatio?: number;
  dividerWidthRatio?: number;
  valueWidthRatio?: number;
  data: {
    title: string;
    value: any;
  }[];
}

const SimpleDataGrid = ({
  gridWidth = 250,
  titleWidthRatio = 0.8,
  dividerWidthRatio = 0.2,
  valueWidthRatio = 1,
  data,
}: Props) => {
  return (
    <Grid style={{width: gridWidth}}>
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
              <Text>{val.value}</Text>
            </Col>
          </Row>
        ))}
    </Grid>
  );
};

export default SimpleDataGrid;
