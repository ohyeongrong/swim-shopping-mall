import BottomActionBar from '@/components/common/BottomActionBar';
import Button from '@/components/common/Button';
import { CloseIcon } from '@/components/common/Icon';
import { useEffect } from 'react';

function FullScreenModal({ modalContent, title, onClose, onSubmit, submitLabel }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="fixed z-2000 inset-0 lg:static lg:inset-auto lg:z-auto lg:bg-[var(--color-gray-100)] bg-[var(--color-white)] py-5 px-4">
            <div className="flex flex-col w-full max-h-full overflow-hidden">

                <div className="flex justify-between items-center pb-5">
                    <h4 className='text-lg font-bold'>{ title }</h4>
                    <button type="button" onClick={ onClose }>
                        <CloseIcon stroke="var(--color-black)"/>
                    </button>
                </div>

                <form onSubmit={ handleSubmit } autoComplete="off" className="flex flex-col flex-1 overflow-hidden">

                    <div className='flex-1 overflow-y-auto flex flex-col gap-6 text-sm'>
                        { modalContent }
                    </div>

                    <div className='flex gap-2 pt-5'>
                        <Button type="button" onClick={ onClose } content="닫기" className="w-full" variant='secondary'/>
                        <Button type="submit" content="등록하기"  className="w-full"/>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FullScreenModal