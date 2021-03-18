import React from 'react'
import {Form,Button} from 'react-bootstrap'
const Form1 = () => {
    return (
        <div style={{display:"flex",justifyContent:"center" ,alignContent:"space-between", marginTop:"5cm", marginBottom:"3cm",}}>
        <div style={{display:"block",height:"16.5cm",width:"12cm",marginLeft:"1.5cm",backgroundColor:'#1a1a1a', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <Form style={{margin :"1cm"}} >
            <h1 style={{marginBottom:"1cm"}}>Sign up</h1><br />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter userame</Form.Label><br />
                <Form.Control type="text" placeholder="@|" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Reapeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{marginLeft:"7cm"}}>
                Submit
              </Button>
            </Form> 
        </div>
        <div style={{display:"block",height:"16.5cm",width:"12cm",marginLeft:"1.5cm",backgroundColor:'#1a1a1a', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            <Form style={{margin :"1cm"}}>
            <h1 style={{marginBottom:"1cm"}}>Sign in</h1><br />
            <div style={{alignItems:"center", justifyContent:"center"}}>
        <Form.Group controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
                <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginLeft:"7cm"}}>
                Submit
              </Button>
            </div>
            </Form>
        </div>
        </div>
    )
}

export default Form1
