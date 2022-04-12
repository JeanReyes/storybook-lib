import React from 'react';
import { ChatAsync } from './chatAsync/ChatAsync';
import { useParams } from 'react-router-dom';
import { ChatForm } from './chatAsync/ChatForm';
import { ChatMessages } from './chatAsync/ChatMessages';
import { ExternalProps } from '../../../interfaces';
import '../../../styles/index.scss';

export const Chat = ({ caseNumber, role = 'user' }: ExternalProps) => {

	const { role: roleParams } = useParams();
	role = roleParams ? roleParams as ('user' | 'agent') : role  
	

	return (
		<ChatAsync caseNumber={ caseNumber } role={ role } seller={ 'Sodimac' }>
			<div className="card">
				<div className="container_header">
					<div className="container_title_video_call">	
						<p style={{ textAlign:'left' }}> Chat Asíncrono </p>
					</div>
				</div>
				<div>
					<ChatMessages/>
					<ChatForm/>
				</div>
			</div>
		</ChatAsync>
	)
}

export default Chat;
