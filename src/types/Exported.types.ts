type ReusableProps = {
    id: number,
    name: string, 
    location: string, 
    tenants: string[] 
}

type PropertyProps = {
    list: ReusableProps[]
    settingId: (id:number) => void
}

type DetailsProps = {
    list: ReusableProps[],
    propertyId: number,
    settingList: (idx: number) => void,
    addingTenant: (tenantName: string) => void,
    editTenant: (editedName: string) => void,
    settingNameIndex: (idx: number) => void
}

export type {DetailsProps, PropertyProps};