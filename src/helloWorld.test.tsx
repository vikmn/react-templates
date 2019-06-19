import React from 'react'
import { shallow } from 'enzyme'

describe('Hello, Enzyme!', (): void => {
    it('renders', (): void => {
        const wrapper = shallow(<div>
            <h1>Hello, Enzyme!</h1>
        </div>)
        expect(wrapper.find('h1').html()).toMatch(/Hello, Enzyme/)
    })
})