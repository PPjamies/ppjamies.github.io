import React from 'react'
import {Button, Card, Checkbox, Field, Fieldset, HStack, Input, Stack, Textarea} from '@chakra-ui/react'

const Contact = () => {

    return (
        <>
            <Card.Root maxWidth="lg">

                <Card.Header>
                    <Card.Title>Let's Connect!</Card.Title>
                    <Card.Description>
                        Fill in the form below to send me a message!
                    </Card.Description>
                </Card.Header>

                <Card.Body>
                    <Fieldset.Root>
                        <Fieldset.Content>

                            <HStack>
                                <Field.Root>
                                    <Field.Label>First Name</Field.Label>
                                    <Input name={'firstName'} type={'text'}/>
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Last Name</Field.Label>
                                    <Input name={'lastName'} type={'text'}/>
                                </Field.Root>
                            </HStack>

                            <Field.Root required>
                                <Field.Label>Email address</Field.Label>
                                <Input name={'email'} type={'email'}/>
                            </Field.Root>

                            <Field.Root required>
                                <Field.Label>Subject</Field.Label>
                                <Input name={'subject'} type={'text'}/>
                            </Field.Root>

                            <Field.Root>
                                <Checkbox.Root>
                                    <Checkbox.HiddenInput/>
                                    <Checkbox.Label>Send me a copy.</Checkbox.Label>
                                    <Checkbox.Control/>
                                </Checkbox.Root>
                            </Field.Root>

                            <Field.Root required>
                                <Field.Label>Message</Field.Label>
                                <Textarea placeholder={'Enter message'}/>
                            </Field.Root>

                        </Fieldset.Content>
                    </Fieldset.Root>
                </Card.Body>

                <Card.Footer>
                    <Button type="submit" alignSelf={'flex-start'}>Submit</Button>
                </Card.Footer>

            </Card.Root>
        </>
    )
}

export default Contact;