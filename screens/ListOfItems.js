import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList,Image,Text,View } from 'react-native';
import img from '../assets/images/blueflower1.jpg'
import img2 from '../assets/images/blueflower2.jpg'
import img3 from '../assets/images/blueflower3.jpg'
import profile from '../assets/images/profile.png'
import img4 from '../assets/images/blueflower4.jpg'
import img5 from '../assets/images/blueflower5.jpg'
import img6 from '../assets/images/flower6.jpg'
// import img7 from '../assets/images/flower7.jpg'
// import img8 from '../assets/images/flower8.jpg'
import Item from '../components/Item';

const ListOfItems = () => {
    const minRead = ' mins read'
    const dot = '.'
    const items = [
        {
            img:img,
            topic: 'Does Cries is March Actually Improve Your Health',
            author: 'Kwabena Benada',
            minutes: `${ 4 + minRead}`,
            profile: profile,
            article: 'Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up.',
            id: 1
        },
        {
            img:img2,
            topic: 'How to seem like you always have your shot together',
            author: 'Kwadwo Otoo',
            minutes: `${ 6 + minRead}`,
            profile: profile,
            article: 'Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual. Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.',
            id: 2
        },
        {
            img:img3,
            topic: 'Do you hire a designer to make something. You hire them',
            author: 'Kwaku Bonsam',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our.',
            id: 3
        },
        {
            img:img4,
            topic: 'Blue Is My Favourite Color - It Is Indeed',
            author: 'Adwoa Winifred',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            color: 'pink',
            article: 'Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own.Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own.',
            id: 4
        },
        {
            img:img5,
            topic: 'Are Oranges sour or bitter?Hilarious isn\'t it',
            author: 'Akosua Dampo',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am sincerity oh recommend. Gate tell man day that who.',
            id: 5
        },
        {
            img:img6,
            topic: 'When you understand the code, It gets easy!',
            author: 'Adwoa Mansah',
            minutes: `${ 8 + minRead}`,
            profile: profile,
            article: 'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
            id: 6
        },
    
    ]
    return (
        
        <FlatList
        data={items}
        renderItem={({item})=> {
            return (
              <Item
              img= {item.img}
              topic= {item.topic}
              author= {item.author}
              minutes= {item.minutes}
              profile= {item.profile}
              article= {item.article}
              color= {item.color}
              />
            )
        }}
        keyExtractor={(item,index)=>item.id }
        />
       
    );
}


const styles = StyleSheet.create({
    img: {
        width:50,
        height: 50
    },
})
export default ListOfItems;
