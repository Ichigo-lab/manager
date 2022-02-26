const data =
{
    general: [
        { id: 1450150, title: 'CASE MANAGMENT', options: [] },
        { id: 1459404, title: 'MAP TIMELINE', options: [] },
        { id: 1459607, title: 'VIEWS AND BRIEFINGS', options: [] },
        { id: 1459703, title: 'NOTIFICATIONS', options: [] },
        { id: 1459805, title: 'MASS COMMUNICATIONS', options: [] },
        { id: 1459905, title: 'TRAFFIC CAMERAS', options: [] },
    ],

    settings: [
        { id: 1450155, title: 'AUDIT LOG', options: [] },
        {
            id: 1451404, title: 'USERS',
            options: [
                { id: 1430150, title: 'USERS ADD' },
                { id: 1250150, title: 'USERS DELETE' },
                { id: 1450180, title: 'USERS EDIT' },
                { id: 1450151, title: 'MAX USERS', select: [10, 20, 30, 40, 50, 60, 70, 80, 90] },
            ]
        }
    ],
    alerts: [
        {
            id: 1451150, title: 'ALERT MANAGER',
            options: [{ id: 1430150, title: 'ALERT RULES', select: [10, 20, 30, 40, 50, 60, 70, 80, 90] }]
        }
    ]
}

export default data