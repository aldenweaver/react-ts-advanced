import { useRef } from 'react';
import Button from './components/Button.tsx';
import Form, { type FormHandle } from './components/Form.tsx';
import Input from './components/Input.tsx';

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // Extracted data is extracted as string even if the value is a number type
    const extractedData = data as { name: string; age: string; };

    console.log(extractedData);
    customForm.current?.clear();
  }

  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
