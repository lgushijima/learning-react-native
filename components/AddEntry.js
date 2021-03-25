import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {getMetricMetaInfo, timeToString} from '../utils/helpers'

import Icon from 'react-native-vector-icons/FontAwesome5'

import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciStepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'

function SubmitBtn ({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default class AddEntry extends Component{
    state={
        run:0,
        bike:0,
        swim:0,
        sleep:0,
        eat:0
    }

    increment = (metric) => {
        const {max, step} = getMetricMetaInfo(metric);
        this.setState((state)=>{
            const count = state[metric] + step
            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }

    decrement = (metric) => {
        const {step} = getMetricMetaInfo(metric);
        this.setState((state)=>{
            const count = state[metric] - getMetricMetaInfo(metric).step
            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(()=>({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString();
        const entry = this.state

        this.setState (()=>({
            run:0,
            bike:0,
            swim:0,
            sleep:0,
            eat:0
        }))
    }

    reset = () =>{
        const key = timeToString();
    }

    render () {
        const metaInfo = getMetricMetaInfo();
        
        if(this.props.alreadyLogged){
            return (
                <View>
                    <Icon name="smile-wink" size={100} color={"black"}></Icon>
                    <Text>You already logged your information for today</Text>
                    <TextButton onPress={this.reset}>Reset</TextButton>
                </View>
            )
        }

        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()} />
                {Object.keys(metaInfo).map((key)=> {
                    const {getIcon, type, ...rest} = metaInfo[key]

                    const value = this.state[key];

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type==='slider' ? 
                                <UdaciSlider value={value} onChange={(value) => this.slide(key,value)} {...rest} /> :
                                <UdaciSteppers value={value} onIncrement={() => this.increment(key)}
                                    onDecrement={() => this.decrement(key)} {...rest}
                                />
                        }
                        </View>
                    )
                })}
                <SubmitBtn onPress={this.submit}></SubmitBtn>
            </View>
        )
    }
}