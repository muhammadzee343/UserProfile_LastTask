import React, {PureComponent} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from '../../Assets/icons/MenuIcon';
import SettingsIcon from '../../Assets/icons/SettingsIcon';
import LocationIcon from '../../Assets/icons/LocationIcon';
import FacebookIcon from '../../Assets/icons/FacebookIcon';
import InternetIcon from '../../Assets/icons/InternetIcon';
import TwitterIcon from '../../Assets/icons/TwitterIcon';
import FolderIcon from '../../Assets/icons/FolderIcon';
import ArrowDownIcon from '../../Assets/icons/DownArrow';
import HeartIcon from '../../Assets/icons/HeartIcon';
import BellIcon from '../../Assets/icons/BellIcon';
import BucketIcon from '../../Assets/icons/BucketIcon';
import ShareIcon from '../../Assets/icons/ShareIcon';
import TagsIcon from '../../Assets/icons/TagsIcon';

class UserProfile extends PureComponent {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <StatusBar hidden />
        <LinearGradient
          colors={['#f731c6', '#6b04bf', '#520194']}
          style={styles.backgroundGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.container}>
            <LinearGradient
              colors={['#ff75dd', '#ff75dd', '#3111d6']}
              locations={[0.6, 0.6, 0.8]}
              style={styles.containerGradient}
              start={{x: 0.07, y: 0.07}}
              end={{x: 1, y: 1}}>
              <View style={styles.headerIconsContainer}>
                <MenuIcon iconColor="white" />
                <SettingsIcon iconColor="white" />
              </View>

              <View style={styles.userInfoContainer}>
                <Text style={styles.userNameStyle}>Jenifar Scott</Text>
                <View style={{flexDirection: 'row', padding: 5}}>
                  <LocationIcon iconColor="white" />
                  <Text style={{color: 'white', paddingLeft: 5}}>
                    LONDON, UK
                  </Text>
                </View>
              </View>
            </LinearGradient>

            <View style={styles.Bottom_background}>
              <View style={styles.Bottom_content}>
                <View style={styles.btnBelowDPStyle}>
                  <View style={styles.facebookIconContainer}>
                    <FacebookIcon iconColor="#e002bf" />
                  </View>
                  <View style={styles.internetIconContainer}>
                    <InternetIcon iconColor="#e002bf" />
                  </View>
                  <View style={styles.twitterIconContainer}>
                    <TwitterIcon iconColor="#e002bf" />
                  </View>
                </View>

                <ScrollView style={styles.profileDescriptionContainer}>
                  <View style={styles.profileSingleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <FolderIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>Shots</Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          66
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.profileContantBottomHorzontalLineStyle} />

                  <View style={styles.profileCommonStyleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <HeartIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>Likes</Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          345
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.profileContantBottomHorzontalLineStyle} />

                  <View style={styles.profileCommonStyleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <BellIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>
                        Notifications
                      </Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          7
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.profileContantBottomHorzontalLineStyle} />

                  <View style={styles.profileCommonStyleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <BucketIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>
                        Buckets
                      </Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          45
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.profileContantBottomHorzontalLineStyle} />

                  <View style={styles.profileCommonStyleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <ShareIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>Share</Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          100
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.profileContantBottomHorzontalLineStyle} />

                  <View style={styles.profileCommonStyleContantContainer}>
                    <View style={styles.profileContantIconContainer}>
                      <TagsIcon iconColor="#ff75dd" />
                    </View>
                    <View style={styles.profileContantTextContainer}>
                      <Text style={styles.profileContantTextStyle}>Tags</Text>
                      <View style={styles.profileInnerRightContainer}>
                        <Text style={styles.profileContantRightDigitStyle}>
                          100
                        </Text>
                        <ArrowDownIcon iconColor="#e002bf" />
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.profileLikeContantBottomHorzontalLineStyle}/> */}
                </ScrollView>
              </View>

              <View style={styles.leftDotStyleInBackground} />
              <View style={styles.BottomDotStyleInBackground} />
            </View>

            <View style={styles.profileImgContainer}>
              <Image
                style={styles.profileImgStyle}
                source={require('../../Assets/images/profilePic.jpg')}
              />
            </View>

            <View style={styles.bgLeftDotStyleOne} />
            <View style={styles.bgLeftDotStyleTwo} />
            <View style={styles.bgRightDotStyleOne} />
            <View style={styles.bgRightDotStyleTwo} />

            <View style={styles.followerContainer}>
              <Text style={styles.noOfFollowerTextStyle}>25K</Text>
              <Text style={styles.followeTextStyle}>Followers</Text>
            </View>

            <View style={styles.followingContainer}>
              <Text style={styles.noOfFollowingTextStyle}>55K</Text>
              <Text style={styles.followeingTextStyle}>Following</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default UserProfile;
