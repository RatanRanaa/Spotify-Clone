import React from 'react'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { PlayList } from './PlayList'

const MenuPlayList = () => {
  return (
    <>
        <div className="playListContainer">
            <div className="nameContainer">
                <p>PlayList</p>
                <i>
                    <FaPlus/>
                </i>
            </div>
            <div className="playListScroll">

                {
                    PlayList && PlayList.map((list)=>(

                    <div className="playList">
                        <i className='list'>
                            <BsMusicNoteList />
                        </i>

                        <p>Sample Name</p>

                        <i className='trash'>
                            <BsTrash/>
                        </i>
                    </div>
                    ))}
            </div>
        </div>
    </>
  )
}

export {MenuPlayList}