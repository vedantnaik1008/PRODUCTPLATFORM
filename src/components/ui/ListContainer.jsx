/* eslint-disable react/prop-types */

const ListContainer = ({ setHoverState, learn, practice, community, children }) => {
    return (
        <li className='relative hidden lgg:block'>
            <div
                onClick={() =>
                    setHoverState((prev) => ({
                        ...prev,
                        learn: learn,
                        practice: practice,
                        community: community
                    }))
                }
                className='flex items-center gap-1 text-[rgba(254,_254,_254,_0.5)] hover:text-white text-lg font-semibold'>
                    {children}
                </div>
        </li>
    );
};

export default ListContainer
