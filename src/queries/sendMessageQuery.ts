import { MessageType } from '@/components/Bot'
import { sendRequest } from '@/utils/index'

export type IncomingInput = {
    question: string
    history: MessageType[]
    overrideConfig?: Record<string, unknown>
    socketIOClientId?: string
    chatId?: string
}

export type MessageRequest = {
    chatflowid: string
    apiHost?: string
    body?: IncomingInput
}

export const sendMessageQuery = ({apiHost = 'http://localhost:3000', body }: MessageRequest) =>
    sendRequest<any>({
        method: 'POST',
        url: `${apiHost}`,
        body
    })

export const isStreamAvailableQuery = ({apiHost = 'http://localhost:3000' }: MessageRequest) =>
    sendRequest<any>({
        method: 'GET',
        url: `${apiHost}`,
    })
