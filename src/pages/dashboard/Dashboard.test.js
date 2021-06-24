import React from "react";
import Dashboard from "./Dashboard";

import Adapter from 'enzyme-adapter-react-16';
import { configure,mount } from 'enzyme';
import thunk from 'redux-thunk';
import { MemoryRouter,Route } from "react-router-dom";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Dashboard', () => {
    it('user got correct results while typing the name', async () => {
        
        const store = mockStore({
            app: {"autoCompleteData":["alice","ali","albert"]}
        });
        configure({adapter: new Adapter()});

        const wrapper = mount(
            <Provider store={store}>
              <MemoryRouter initialEntries={["/app/main/dashboard"]}>
                <Route path="/app/main/dashboard">
                  <Dashboard />
                </Route>
              </MemoryRouter>
            </Provider>
        );      

        //console.log(wrapper.debug(), 100);
        
        const searchInput =  wrapper.find('input');

        const mockedEvent = {
            preventDefault: jest.fn(),
            target: { value: 'alice' }
        };

        // so autocomplete list is open, showing "alice" option
        searchInput.simulate('change', mockedEvent);
        
        expect(wrapper.find('input').prop('value')).toBe('alice'); // All is good so far..
    
        // now click on the autocomplete list item
        // in some occasion, many HTML elements matched so I had to use getAllByText then pick to right one

        const dropdown_buttons =  wrapper.find('.suggestionItem');

        expect(dropdown_buttons.at(0).text()).toEqual('alice');
    });
});

describe('Dashboard', () => {
    it('user got error when he clicked Save', async () => {
            
        const store = mockStore({
            app: {"autoCompleteData":["alice","ali","albert"],"writeStatus":false}
        });

        configure({adapter: new Adapter()});

        const wrapper = mount(
            <Provider store={store}>
            <MemoryRouter initialEntries={["/app/main/dashboard"]}>
                <Route path="/app/main/dashboard">
                <Dashboard />
                </Route>
            </MemoryRouter>
            </Provider>
        );      

        //console.log(wrapper.debug(), 100);
        
        const searchInput_1 =  wrapper.find('input');

        const mockedEvent = {
            preventDefault: jest.fn(),
            target: { value: 'alice' }
        };

        // so autocomplete list is open, showing "alice" option
        searchInput_1.simulate('change', mockedEvent);
        
        expect(wrapper.find('input').prop('value')).toBe('alice'); // All is good so far..

        const dropdown_buttons =  wrapper.find('.suggestionItem');
        expect(dropdown_buttons.at(0).text()).toEqual('alice');
        
        const searchInput =  wrapper.find('.submitButton').at(0);
        searchInput.simulate('click');

        const alertWarning =  wrapper.find('Fade').find('.alertDismissibleButton');

        expect(alertWarning.at(1).prop('in')).toEqual(true);
    });
});