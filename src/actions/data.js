export const olddata = {
    status: 'field_1',
    mailingName: 'Название рассылки',
    statuses: [
        {
            text: 'field 1',
            value: 'field_1'
        },
        {
            text: 'field 2',
            value: 'field_2'
        },
        {
            text: 'field 3',
            value: 'field_3'
        },
    ],
    applServices: [
        {
            text: 'applService 1',
            value: 'applService_1',
        },
        {
            text: 'applService 2',
            value: 'applService_2',
        },
        {
            text: 'applService 3',
            value: 'applService_3',
        },
        {
            text: 'applService 4',
            value: 'applService_4',
        },
        {
            text: 'applService 5',
            value: 'applService_5',
        },
    ],
    additionalConditions: [
        {
            applService: 'applService_1',
            applServiceValue: 'other_appl_service_1',
            operator: 'equal',
            id: '87'
        },
        {
            applService: 'applService_2',
            applServiceValue: 'for_appl_service_2',
            operator: 'not equal',
            id: '4234'
        },
        {
            applService: 'applService_3',
            applServiceValue: 'other_appl_service_3',
            operator: 'equal',
            id: '234'
        },
        {
            applService: 'applService_4',
            applServiceValue: 'applServiceValue_4',
            operator: 'not equal',
            id: '53'
        },
    ],
    operators: [
        {
            text: '=',
            value: 'equal',
        },
        {
            text: '!=',
            value: 'not equal',
        },
    ],
    applServicesArrays: {
        applService_1: [
            {
                text: 'text for appl service1',
                value: 'for_appl_service_1'
            },
            {
                text: 'other for appl service1',
                value: 'other_appl_service_1'
            }
        ],
        applService_2: [
            {
                text: 'text for appl service2',
                value: 'for_appl_service_2'
            },
            {
                text: 'other for appl service2',
                value: 'other_appl_service_2'
            }
        ],
        applService_3: [
            {
                text: 'text for appl service3',
                value: 'for_appl_service_3'
            },
            {
                text: 'other for appl service 3',
                value: 'other_appl_service_3'
            }
        ],
        applService_4: [],
    },
    companies: [
        {
            text: 'company 1',
            value: 'company_1'
        },
        {
            text: 'company 2',
            value: 'company_2'
        }
    ],
    bindings: [
        {
            company: 'company_2',
            delay: '5',
            id: '3234'
        },
        {
            company: 'company_1',
            delay: '10',
            id: '31231'
        }
    ]
}





export const newdata = {
    status: null,
    mailingName: null,
    statuses: [
        {
            text: 'field 1',
            value: 'field_1'
        },
        {
            text: 'field 2',
            value: 'field_2'
        },
        {
            text: 'field 3',
            value: 'field_3'
        },
    ],
    applServices: [
        {
            text: 'applService 1',
            value: 'applService_1',
        },
        {
            text: 'applService 2',
            value: 'applService_2',
        },
        {
            text: 'applService 3',
            value: 'applService_3',
        },
        {
            text: 'applService 4',
            value: 'applService_4',
        },
        {
            text: 'applService 5',
            value: 'applService_5',
        },
    ],
    additionalConditions: [],
    operators: [
        {
            text: '=',
            value: 'equal',
        },
        {
            text: '!=',
            value: 'not equal',
        },
    ],
    applServicesArrays: {
        applService_1: [
            {
                text: 'text for appl service1',
                value: 'for_appl_service_1'
            },
            {
                text: 'other for appl service1',
                value: 'other_appl_service_1'
            }
        ],
        applService_2: [
            {
                text: 'text for appl service2',
                value: 'for_appl_service_2'
            },
            {
                text: 'other for appl service2',
                value: 'other_appl_service_2'
            }
        ],
        applService_3: [
            {
                text: 'text for appl service3',
                value: 'for_appl_service_3'
            },
            {
                text: 'other for appl service 3',
                value: 'other_appl_service_3'
            }
        ],
        applService_4: [],
    },
    companies: [
        {
            text: 'company 1',
            value: 'company_1'
        },
        {
            text: 'company 2',
            value: 'company_2'
        }
    ],
    bindings: [
    ]
}

export const replyAccessGroup = [
    {
        name: 'stern',
        id: '123123'
    },
    {
        name: 'nevis',
        id: '46644'
    },
    {
        name: 'pixel',
        id: '24523'
    },
]
export const adminAccessGroup = [
    {
        name: 'rock',
        id: '3133'
    },
    {
        name: 'smile',
        id: '45325'
    },
    {
        name: 'fok',
        id: '53363'
    },
]

export const allAccesses = [
    {value: 'replyAccessGroup', text: 'reply'},
    {value: 'adminAccessGroup', text: 'admin'},
    ]

export const accessUsers = [
    {
        text: 'user 1',
        value: '2412412241'
    },
    {
        text: 'user 2',
        value: '5345345'
    },
    {
        text: 'user 3',
        value: '33525'
    },
    {
        text: 'user 4',
        value: '74745747'
    },
    {
        text: 'user 5',
        value: '88586585'
    },
    {
        text: 'user 6',
        value: '4647747'
    },
    {
        text: 'user 7',
        value: '76967967'
    },
]
export const logsList = [
    {
        text: 'Тут будут все задачи, связанные с фронтом данного сервиса.',
        value: '2412412241'
    },
    {
        text: 'Oбщий макет доступен по ссылке (страницы нужно листать):',
        value: '5345345'
    },
    {
        text: 'Tут вносить все траты по оформлению главной страницы приложения и страницы логина.',
        value: '33525'
    },
    {
        text: 'Кружки с числами -это комментарии к макету в мокапсе так отображаются',
        value: '74745747'
    },
    {
        text: 'Сделать фронт для вкладок раздела "Администрирование"',
        value: '88586585'
    },
    {
        text: 'страницы с вкладками "Список рассылок" и "Настройка',
        value: '4647747'
    },
    {
        text: 'Вкладка "Настройка пользовательских полей":',
        value: '76967967'
    },
]