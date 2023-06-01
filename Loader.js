import { StyleSheet, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const AnimCircle = props => {
    const zoom = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        setTimeout(() => {Animated.loop(
            Animated.sequence([
                Animated.timing(zoom, {
                    toValue: 1.75,
                    duration: 900,
                }),
                Animated.timing(zoom, {
                    toValue: 1,
                    duration: 900,
                })
            ])
        ).start();
        }, props.delay);
        
    }, [zoom]);

    return (
        <Animated.View 
            style={{
                ...props.style,
                scale: zoom,
            }}>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    box: {
        position: 'relative',
        width: 100,
        height: 100,
    },
    circle: {
        position: 'absolute',
        width: 12,
        height: 12,
        backgroundColor: '#2C92D2',
        borderRadius: '50%',
    },
    circle0: {
        top: 0,
        left: 37,
    },
    circle1: {
        top: 10,
        left: 63,
    },
    circle2: {
        top: 30,
        left: 79,
    },
    circle3: {
        top: 53,
        left: 73,
    },
    circle4: {
        top: 70,
        left: 55,
    },
    circle5: {
        top: 73,
        left: 30,
    },
    circle6: {
        top: 60,
        left: 8,
    },
    circle7: {
        top: 35,
        left: 0,
    },
    circle8: {
        top: 10,
        left: 10,
    }
});

export default function LoadingPage(props) {
    const array = Array.from(Array(9).keys()).map(el=>'circle'+el);
    return (
          <View style={styles.box}>
              {array.map((item, index) =>
                  <AnimCircle style={{...styles.circle, ...styles[item]}} delay={index*200}>
                  </AnimCircle>
              )}
          </View>
    );
}
