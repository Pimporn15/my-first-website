import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Component } from 'react';
import DisplayJohn from './components/DisplayJohn'
import { JohnProfile } from './components/DisplayJohn';
function App() {
  return (
    <div className="App">
<div>
        <Button colorScheme='blue' size= 'xs'>Button</Button>
        </div><div>      
        <Button colorScheme='red' size='md'>Button</Button>
        </div><div>
<Button colorScheme='pink' size = 'lg'>Button</Button> 
</div><div>
        <Spinner  size = 'xs'/>
        <Spinner color='red.500' size= 'md' />
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/>
 
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
  <DisplayJohn/>
  <JohnProfile/>



        
</div>
    </div>
  );
}

export default App;
