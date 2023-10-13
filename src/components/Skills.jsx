import React from 'react';
import Flutter from '../assets/flutter.png'
import Python from '../assets/python.png'
import Gym from '../assets/gym.png'
import Docker from '../assets/docker.png'
import Firebase from '../assets/firebase.png'
import Kotlin from '../assets/kotlin.png'

function Skills() {
    return (
        <div id={'skills'} className={'w-full h-screen bg-[#0a192f] text-gray-300'}>
            {/* Container */}
            <div className={'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'}>
                <div>
                    <p className={'text-4xl font-bold inline border-b-4 border-b-pink-600'}> Skills</p>
                    <p className={'py-4'}>// Here are some technologies I'm most familiar with ⚙️</p>
                </div>

                <div className={'w-full grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 text-center py-8'}>
                    <div className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500'}>
                        <img className={'w-20 mx-auto px-3'} src={Flutter} alt={'Flutter Logo'}/>
                        <p className={'my-4'}> App development</p>
                    </div>

                <div>
                    <div
                        className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-center'}>
                        <img className={'w-20 mx-auto px-2'} src={Kotlin} alt={'Python Logo'}/>
                        <p className={'my-4'}>Android development</p>
                    </div>
                    </div>
                    <div className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500 justify-center'}>
                        <img className={'w-20 mx-auto px-2'} src={Python} alt={'Python Logo'}/>
                        <p className={'my-4'}>Software development</p>
                    </div>
                    <div className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500'}>
                        <img className={'w-20 mx-auto px-2'} src={Gym} alt={'Gym Logo'}/>
                        <p className={'my-4'}> AI development</p>
                    </div>

                    <div className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500 '}>
                        <img className={'w-20 mx-auto px-2'} src={Docker} alt={'Docker Logo'}/>
                        <p className={'my-4'}>Roll it out</p>
                    </div>
                    <div className={'w-40 h-40 shadow-md shadow-[#040c16] hover:scale-110 duration-500 '}>
                        <img className={'w-20 mx-auto px-3'} src={Firebase} alt={'Docker Logo'}/>
                        <p className={'my-4'}>Save all the important bits</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Skills;