import React, { useMemo, useCallback } from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { SIZES } from '../../constant';

function BottomSheetComponent({ sheetRef, component, type }) {
  // variables
  const checkType = (types) => {
    if (types === 'status') {
      return SIZES.height * 0.5;
    } if (types === 'hubungi') {
      return SIZES.height * 0.65;
    } if (types === 'bid') {
      return SIZES.height * 0.61;
    } if (types === 'sort') {
      return SIZES.height * 0.53;
    }
    return SIZES.height * 0.5;
  };

  const snapPoints = useMemo(() => ['1%', '1%', checkType(type)], [type]);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = () => sheetRef.current.close();

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      index={0}
      ref={sheetRef}
      snapPoints={snapPoints}
      enableHandlePanningGesture
      enableContentPanningGesture
      enableOverDrag
      animateOnMount
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}
    >
      {component}
    </BottomSheet>
  );
}

export default BottomSheetComponent;
