import * as React from 'react';

interface IWelcomeProps {
  name: string,
 }

 const Welcome: React.SFC<IWelcomeProps> = (props) => {
  return <h1>Hello, {props.name}</h1>;
 }

class Test extends React.Component {

  constructor(props: any){
      super(props);
  }

  public render() {
    return (
      <div>
      
      <button type="button" className="btn btn-default">button</button>
      <Welcome name={'Dushan Randika'}/>
      </div>
    );
  }
}

export default Test;


