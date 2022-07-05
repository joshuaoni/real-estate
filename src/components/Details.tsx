import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import { DetailsProps } from "../types/Exported.types"


export const Details = ({list, propertyId, settingList, addingTenant, editTenant, settingNameIndex}: DetailsProps) => {
    const [tenantName, setTenantName] = useState('');
    const [editedName, setEditedName] = useState('');

    const handleDelete = (idx: number) =>  {
        settingList(idx);
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        addingTenant(tenantName);
        setTenantName('');
        var error = document.querySelector('.error');
        error?.classList.add('none');
    }

    const handleEdit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        editTenant(editedName);
        setEditedName('');
        var editForm = document.querySelector('.edit-form');
        editForm?.classList.toggle('none')
    }

    return (
        <div className="details">
            {propertyId === 0 ?
            <Typography variant="h6" gutterBottom component="div" className='text-align-center'>
                Select a property to view details
            </Typography> :
            <div>
                <Typography variant="h6" gutterBottom component="div" className="bold">
                    {list[propertyId-1].name}
                </Typography>
                <Typography variant="body2" gutterBottom component="div" className='heading'>
                    {list[propertyId-1].location}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Tenants :
                </Typography>
                <form 
                    className="edit-form none"
                    onSubmit={(e)=>{
                        handleEdit(e);
                    }}>
                    <TextField
                        className="text"
                        size="small"
                        id="outlined-required"
                        label="Edit Name"
                        value={editedName}
                        onChange={(e)=>{
                            setEditedName(e.target.value);
                        }}
                    />
                    <Button onClick={handleEdit} size="large" variant="contained" endIcon={<SaveIcon />}>Save</Button>
                </form>
                <List dense={false}>
                    {list[propertyId-1].tenants.map((name, i)=>{
                        return (
                            <ListItem
                                key={name}
                                secondaryAction={
                                <>
                                    <IconButton
                                        className="edit"
                                        edge="end"
                                        aria-label="edit"
                                        onClick={() => {
                                            var editForm = document.querySelector('.edit-form');
                                            editForm?.classList.toggle('none');
                                            settingNameIndex(i);
                                        }}>
                                            <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => {
                                            handleDelete(i);
                                        } }>
                                        <DeleteIcon />
                                    </IconButton>
                                    </>
                                }
                            >
                                <ListItemAvatar>
                                <Avatar>
                                    
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={name}
                                />
                            </ListItem>
                        )
                    })}
                </List>
                <form onSubmit={(e)=>{
                    handleSubmit(e);
                }}>
                    <TextField
                        className="text"
                        id="outlined-required"
                        size="small"
                        label="New Tenant"
                        value={tenantName}
                        onChange={(e)=>{
                            setTenantName(e.target.value);
                        }}
                    />
                    <Button onClick={handleSubmit} size="large" variant="contained" endIcon={<AddIcon />}>Add Tenant</Button>
                </form>
            </div>
          }
        </div>
    )
}
