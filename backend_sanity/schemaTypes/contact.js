import {defineConfig} from 'sanity'

export default defineConfig({
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'message',
            title:'Message',
            type:'text'
        }
    ]
})