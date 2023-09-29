import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Video from 'react-native-video';

const MyVideo = props => {
  const {onLoadComplete = () => {}} = props;
  const playerRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <View
      style={{
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        ...props.containerStyle,
      }}>
      <Video
        ref={playerRef}
        // onBuffer={() => setIsLoading(true)}
        controls={false}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          ...props.videoStyle,
        }}
        onLoad={() => {
          setIsLoading(false);
          onLoadComplete();
        }}
        {...props}
      />
      {isLoading && props.loader && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size="large" color="white" animating={isLoading} />
        </View>
      )}
    </View>
  );
};

export default MyVideo;
