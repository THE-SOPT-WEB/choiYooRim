import Li from './components/Li';
import Info from './components/Info';
import './Skeleton.css';

const Skeleton = () =>{
    return (
      new Array(15).fill(1).map((i) => {
        return(
            <Li className='skeleton-item'>
                <Info className="skeleton-name"> </Info>
                <div className="skeleton-infoDiv">
                    <Info className="skeleton-phone"></Info>
                    <Info className='skeleton-address'></Info>
                </div>
            </Li>
        )})
    )
}

export default Skeleton;