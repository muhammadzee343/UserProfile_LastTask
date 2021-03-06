import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function TagsIcon(props) {
  return (
    <Svg viewBox="0 0 512 512" height="25" width="25">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M266.909 0L17.519 249.87c-23.334 23.374-23.334 61.406.002 84.781l159.51 159.745c11.325 11.341 26.388 17.593 42.415 17.604h.043c16.011 0 31.067-6.23 42.4-17.547l250.092-249.829V0H266.909zm205.073 228.043l-238.36 238.108A19.87 19.87 0 01219.49 472h-.015a19.872 19.872 0 01-14.139-5.868L45.827 306.389c-7.778-7.791-7.778-20.468.001-28.26L283.501 40h188.481v188.043z"
      />
      <Circle cx={375.98} cy={136} r={32} />
    </Svg>
  );
}

export default TagsIcon;
