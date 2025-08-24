import React from 'react'

// const Card = (props) => {
const Card = ({ name, age, img ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}) => {

    // console.log('props', props)
    return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
            <img
                src={img}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="text-gray-400">
                        This is The profile of {name} and his/her age is {age}.
                    </p>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                >
                    Read more
                </button>
            </div>
        </div>
    )
}

export default Card