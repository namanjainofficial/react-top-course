import React from 'react'
import { FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';


const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //course already liked hai
            setLikedCourses( (prev) => prev.filter( cid => (cid !== course.id) ) );
            toast.warning("like removed");
        }else{
            if(likedCourses.length === 0){
                setLikedCourses( [course.id] );
            }else{
                setLikedCourses( prev => [...prev, course.id])
            }
            toast.success("successfully Liked")
        }
    }
  return (
    <div className='w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt=''></img>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-36
            grid place-items-center'>
                {likedCourses.includes(course.id) ? 
                                (<button onClick={clickHandler}>
                                    <FcLike fontSize="1.75rem" />
                                </button>) 
                                : 
                                (<button onClick={clickHandler}>
                                    <FcLikePlaceholder fontSize="1.75rem" />
                                </button>) 
                                }
               {/* <button onClick={clickHandler}>
                                {likedCourses.includes(course.id) ? 
                                                (<FcLike fontSize="1.75rem" />)
                                                 : 
                                                 (<FcLikePlaceholder fontSize="1.75rem" />)}
                                    
                                </button>  */}
            </div>

            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>
                    { 
                        course.description.length >= 100 
                            ? 
                            (course.description.substr(0,100)) + "..."
                            : ( course.description)
                        }
                    </p>
            </div>

        </div>
    </div>
  )
}

export default Card
