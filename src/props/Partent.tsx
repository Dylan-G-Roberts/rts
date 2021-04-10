import { Child } from './Child';
const Parent = () => {
    return <Child color='red' onClick={() => console.log('click')}>
        asdf
    </Child>
};

export default Parent;