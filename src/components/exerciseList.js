import React from 'react'
import Card from './Card'


const ExerciseList = ({exercises}) => ( //props....
     <div>
        { exercises.map((Exercises)=>{ //props.exercises.map...
            return (
                <Card 
                    key={Exercises.id}
                    tittle={Exercises.title}
                    description={Exercises.description}
                    img={Exercises.img}
                    leftcolor={Exercises.leftColor}
                    rightcolor={Exercises.rightColor}
                />
            )
        })}
    </div>
)


export default ExerciseList