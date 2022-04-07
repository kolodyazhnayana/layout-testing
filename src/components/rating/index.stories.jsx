import Rating from "./index"

export default {
    title: 'Layout/Rating',
    component: Rating
}

const Template = (args) => <Rating {...args} />

export const Min = Template.bind({})
Min.args = {
    reviews: null,
    grade: 0,
    total: 5
}

export const Middle = Template.bind({})
Middle.args = {
    reviews: 27,
    grade: 2.5,
    total: 5
}

export const Max = Template.bind({})
Max.args = {
    reviews: 759,
    grade: 10,
    total: 10
}

