import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon(props) {
  // console.log("props in user", props.SVGStrings)
  // let size = props.size ? props.size : 40;
  return (
    <Svg viewBox="0 0 512 512" height="20" width="20">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M407.579 87.677C376.506 34.053 321.314 1.292 259.939.04c-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308L409.906 263.8c30.304-55.471 29.435-121.311-2.327-176.123zM256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z"
      />
    </Svg>
  );
}

export default LocationIcon;
