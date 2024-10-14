import { View } from "react-native";
import { Skeleton as RNESkeleton } from "@rneui/themed";
import { useEffect, useState } from "react";

type SkeletonProps = {
  width?: number;
  height?: number;
  renderNumber?: number;
  grid?: boolean;
  gridSettings?: {
    column: number;
    row: number;
  };
};

type RequiredGridProps = SkeletonProps & {
  renderNumber?: never;
  grid: true;
  gridSettings: {
    column: number;
    row: number;
  };
};

type OptionalGridProps = SkeletonProps & {
  grid?: false;
  gridSettings?: never;
};

type SkeletonPropsType = RequiredGridProps | OptionalGridProps;

const useRenderNumber = (renderNumber: SkeletonProps["renderNumber"]) => {
  return renderNumber || 1;
};

const useGridSettings = (gridSettings: SkeletonProps["gridSettings"]) => {
  return gridSettings || { column: 1, row: 1 };
};

const Skeleton = ({
  renderNumber,
  grid,
  gridSettings,
  width,
  height,
}: SkeletonPropsType) => {
  const [fwidth, setFwidth] = useState(100);
  const [skwidth, setSkwidht] = useState(0);

  useEffect(() => {
    setSkwidht(
      (fwidth - useGridSettings(gridSettings).column * 8) /
        useGridSettings(gridSettings).column
    );
  }, [fwidth, gridSettings]);

  return (
    <View onLayout={(e) => setFwidth(e.nativeEvent.layout.width)}>
      {grid
        ? Array.from(
            { length: useGridSettings(gridSettings).row },
            (_, index) => (
              <View style={{ flexDirection: "row", marginVertical: 4 }}>
                {Array.from(
                  { length: useGridSettings(gridSettings).column },
                  (_, index) => (
                    <View style={{ marginHorizontal: 4 }}>
                      <RNESkeleton
                        width={skwidth}
                        height={height || 85}
                        key={index}
                      />
                    </View>
                  )
                )}
              </View>
            )
          )
        : Array.from({ length: useRenderNumber(renderNumber) }, (_, index) => (
            <View style={{ marginVertical: 4 }}>
              <RNESkeleton
                // @ts-expect-error
                width={width || "100%"}
                height={height || 85}
              />
            </View>
          ))}
    </View>
  );
};

export default Skeleton;
