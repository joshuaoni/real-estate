import { Details } from "./Details"
import { Properties } from "./Properties"
import './components.css';
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const propertyList = [
    {id: 1, name: 'Lagos Highrises', location: '7A, Odili Road, Yaba', tenants: ['Olagbenro Adeite', 'Ilori Davies']},
    {id: 2, name: 'Mushin Apartments', location: '6, Tafawa Balewa Way, Akoka', tenants:['Joshua Oni', 'Segun Oni', 'Emmanuel Oba']},
    {id: 3, name: 'Ikotun Complex', location: '13B, Ikotun Express, Ikeja', tenants: ['Bolu Oderinde', 'Victor Mudiaga']},
    {id: 4, name: 'West-Bridge Duplexes', location: '10A, Lagos Mainland, Yaba', tenants: ['David Mark', 'Annie January', 'Butcher', 'Senator Clay Davis', 'Avon Barksdale', 'Marlo Stanfield']},
    {id: 5, name: 'Biodun Plaza', location: '5, 16th Avenue Str, Lagos', tenants: ['Susan Wakama', 'Chibueze Ahiwe', 'AL Rho']},
    {id: 6, name: 'Ridwan Residentials', location: '56, University Rd, Akoka', tenants: ['Deborah', 'Mide Yusuf', 'Lekan Akinwa']},
    {id: 7, name: 'New Age Hostels', location: '13, University Rd, Akoka', tenants: ['Smuel Otikor', 'Prince Jebba']}
]

export const Main = () => {
    const [list, setList] = useState(propertyList);
    const [propertyId, setPropertyId] = useState(0);
    const [nameIndex, setNameIndex] = useState(-1);
    
    const addingTenant = (tenantName: string) => {
        const newState = list.map(obj => {
            if (obj.id === propertyId) {
                return {...obj, tenants: [...obj.tenants, tenantName]}
            }
            return obj;
        })
        setList(newState);
    }

    const editTenant = (editedName: string) => {
        const newState = list.map(obj => {
            if (obj.id === propertyId) {
                return {...obj, tenants: obj.tenants.map((tenant, i)=>{
                    if (i === nameIndex) {
                        return tenant = editedName;
                    } else {
                        return tenant;
                    }
                })}
            }
            return obj;
        })
        setList(newState);
    }
    
    const settingList = (idx: number) =>{
        const newState = list.map(obj => {
            if (obj.id === propertyId) {
                return {...obj, tenants: obj.tenants.filter((tenant, i)=>{return i!== idx})}
            }
            return obj;
        })
        setList(newState);
    }
    
    const settingNameIndex = (idx: number) => {
        setNameIndex(idx);
    }
    
    const settingId = (id: number) => {
        setPropertyId(id);
        var container = document.querySelector('.container');
        container?.classList.remove('details-cont')
    }

    
    return (
        <section>
            <Grid container spacing={4}>
                <Grid item md={5} xs={12} >
                    <Typography className='label' variant="h6" gutterBottom component="div">
                        PROPERTY LIST
                    </Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Typography className='max-label label' variant="h6" gutterBottom component="div">
                        DETAILS 
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                
                <Grid item md={5} xs={12}>
                    <Properties settingId={settingId} list={list}/>
                </Grid>
                <Grid item md={7} xs={12} className='min-label'>
                    <Typography className='label' variant="h6" gutterBottom component="div">
                        DETAILS 
                    </Typography>
                </Grid>
                <Grid item md={7} xs={12} className='container details-cont'>
                    <Details settingNameIndex={settingNameIndex} editTenant={editTenant} addingTenant={addingTenant} settingList={settingList} propertyId={propertyId} list={list}/>
                </Grid>
            </Grid>
        </section>
    )
}