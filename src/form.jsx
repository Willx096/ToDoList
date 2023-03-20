<Form onSubmit={enviar}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onInput={(e)=>setEmail(e.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className={errorPassword ? "ERROR! Falta signo $": ''} type="password" placeholder="Password" value={password} onInput={(e)=>setPassword(e.target.value)}/>
        <Form.Text className="text-muted">
           {errorPassword ? "ERROR! Falta signo $": ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>