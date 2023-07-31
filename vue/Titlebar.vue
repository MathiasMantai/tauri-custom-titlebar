<template>
    <div 
        data-tauri-drag-region 
        class="flex justify-between w-[100%] text-white bg-black select-none"
    >
        <div 
            data-tauri-drag-region 
            class='px-2 py-1'
        >
            {{ props.title }}
        </div>
        <ul className='flex'>
            <li 
                class='hover:bg-[#303049] px-2 py-1 cursor-pointer' 
                @click="minimizeWindow"
            >
                <FontAwesomeIcon 
                    :icon="faWindowMinimize" 
                    color="#fff" 
                    class=''
                />
            </li>
            <li 
                className='hover:bg-[#303049] px-2 py-1 cursor-pointer' 
                @click="maximizeWindow"
            >
                    <FontAwesomeIcon 
                        :icon="faSquare" 
                        color="#fff" 
                        className='' />
            </li>
            <li 
                className='hover:bg-[#D41324] px-2 py-1 cursor-pointer' 
                @click="closeWindow"
            >
                <FontAwesomeIcon 
                    :icon="faXmark"
                    color="#fff" 
                    className='' 
                />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faWindowMinimize, faXmark, faSquare } from '@fortawesome/free-solid-svg-icons';
    import { appWindow } from '@tauri-apps/api/window'

    const props = defineProps<{
        title: string
    }>()

    const minimizeWindow = async () => {
        await appWindow.minimize();
    }

    const maximizeWindow = async () => {
        await appWindow.toggleMaximize();
    }
    
    const closeWindow = async () => {
        await appWindow.close();
    }
</script>