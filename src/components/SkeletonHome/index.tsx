import React from 'react';

import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { useTheme } from 'styled-components';

import { SkeletonProps } from './types';

const SkeletonHome: React.FC<SkeletonProps> = ({ place }) => {
  const { colors } = useTheme();
  type SkeletonType = React.ComponentProps<typeof SkeletonContent>;

  const getSkeletonLayout: () => SkeletonType['layout'] = () => {
    switch (place) {
      case 'categories':
        return [
          {
            key: 'l1',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            children: [
              {
                key: 'i1',
                width: 60,
                height: 16,
                marginBottom: 6,
                borderRadius: 10,
              },
              {
                key: 'i2',
                width: 60,
                height: 16,
                borderRadius: 10,
                marginBottom: 6,
                marginLeft: 10,
              },
              {
                key: 'i3',
                width: 60,
                height: 16,
                borderRadius: 10,
                marginBottom: 6,
                marginLeft: 10,
              },
              {
                key: 'i4',
                width: 60,
                height: 16,
                borderRadius: 10,
                marginBottom: 6,
                marginLeft: 10,
              },
              {
                key: 'i5',
                width: 60,
                height: 16,
                borderRadius: 10,
                marginBottom: 6,
                marginLeft: 10,
              },
            ],
          },
        ];
      case 'newProducts':
        return [
          {
            key: 'l1',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 16,
            marginBottom: 16,
            marginLeft: 16,
            children: [
              {
                key: 'i1',
                width: 170,
                height: 280,
                marginBottom: 6,
              },
              {
                key: 'i2',
                width: 170,
                height: 280,
                marginBottom: 6,
                marginLeft: 40,
              },
              {
                key: 'i3',
                width: 170,
                height: 280,
                marginBottom: 6,
                marginLeft: 40,
              },
              {
                key: 'i4',
                width: 170,
                height: 280,
                marginBottom: 6,
                marginLeft: 40,
              },
              {
                key: 'i5',
                width: 170,
                height: 280,
                marginBottom: 6,
                marginLeft: 40,
              },
            ],
          },
        ];
      default:
        return [
          {
            key: 'l1',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
            children: [
              {
                key: 'i1',
                width: 150,
                height: 200,
                marginBottom: 6,
              },
              {
                key: 'i2',
                width: 150,
                height: 200,
                marginBottom: 6,
                marginLeft: 40,
              },
            ],
          },
          {
            key: 'l2',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
            children: [
              {
                key: 'i1',
                width: 150,
                height: 200,
                marginBottom: 6,
              },
              {
                key: 'i2',
                width: 150,
                height: 200,
                marginBottom: 6,
                marginLeft: 40,
              },
            ],
          },
          {
            key: 'l3',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
            children: [
              {
                key: 'i1',
                width: 150,
                height: 200,
                marginBottom: 6,
              },
              {
                key: 'i2',
                width: 150,
                height: 200,
                marginBottom: 6,
                marginLeft: 40,
              },
            ],
          },
          {
            key: 'l4',
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
            children: [
              {
                key: 'i1',
                width: 150,
                height: 200,
                marginBottom: 6,
              },
              {
                key: 'i2',
                width: 150,
                height: 200,
                marginBottom: 6,
                marginLeft: 40,
              },
            ],
          },
        ];
    }
  };

  return (
    <SkeletonContent
      isLoading
      boneColor={colors.skeleton.boneColor}
      highlightColor={colors.skeleton.highlightColor}
      layout={getSkeletonLayout()}
    />
  );
};

export default SkeletonHome;
