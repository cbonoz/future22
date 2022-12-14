import { Button, Card, Radio, Select, Space, Input } from 'antd';
import Image from 'next/image'

const { TextArea } = Input;

import React from 'react'
import { useWizard, Wizard } from 'react-use-wizard';
import { AnimatePresence } from 'framer-motion';
import logo from 'assets/logo_trans.png';

import { APP_NAME, ONBOARD_QUESTIONS } from '../util/constants';


const Step = ({ number, setData, data }) => {
    const { handleStep } = useWizard();

    handleStep(() => {
        console.log(`Going to step ${number}`);
    });

    const question = ONBOARD_QUESTIONS[number]
    const value = data[question.text]

    const ResponseArea = () => {
        if (question.type === 'open-response') {
            return (
                <div>
                    <TextArea
                        autoSize={{ minRows: 3, maxRows: 6 }}

                        value={value} onChange={(e) => setData({ ...data, [question.text]: e.target.value })} />
                </div>

            )
        } else if (question.type === 'multiple-choice') {
            return (
                <div>
                    <Radio.Group
                        style={{ width: 500 }}

                        value={value} onChange={(e) => setData({ ...data, [question.text]: e })}>
                        <Space direction="vertical">

                            {question.options.map((option) => {
                                return <Radio value={option}>{option}</Radio>
                            })}
                        </Space>
                    </Radio.Group>
                </div>
            )
        }

    }

    return <Card title={question.text} style={{ minHeight: '250px' }}>
        <ResponseArea />
    </Card>
};


const Footer = () => {
    const {
        nextStep,
        previousStep,
        isLoading,
        activeStep,
        stepCount,
        isLastStep,
        isFirstStep,
    } = useWizard();

    return (
        <code>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '20px' }}>
                <p>
                    Question: {activeStep + 1} of {stepCount} <br />
                </p>
            </div>
            <div>
                <Button
                    onClick={() => previousStep()}
                    disabled={isLoading || isFirstStep}
                >
                    Previous
                </Button>
                &nbsp;
                <Button type="primary" onClick={() => nextStep()} disabled={isLoading || isLastStep}>
                    Next
                </Button>
            </div>
        </code>
    );
};

export default function SignUp() {
    const [data, setData] = React.useState({})

    return (
        <div>
            <div className='heading-area centered'>
                <Image width={200} autoSize src={logo} alt='CareerBridge' style={{ width: '200px' }} />
                <br/>
                <br/>

            <h1>Welcome to {APP_NAME}</h1>
            <br/>
            <p>Complete the below questions to create your profile.</p>
            <br/>
            </div>
            <Wizard footer={<Footer />} wrapper={<AnimatePresence initial={false} exitBeforeEnter />}
            >
                <Step setData={setData} data={data} number={0} />
                <Step setData={setData} data={data} number={1} />
                <Step setData={setData} data={data} number={2} />
            </Wizard>
        </div>
    )
}
