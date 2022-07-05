import Avatar from "@mui/material/Avatar"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import estate from '../assets/estate.png'
import { PropertyProps } from "../types/Exported.types"


export const Properties = ({list, settingId}: PropertyProps) => {

    const  handleRequest = (id: number) => {
        settingId(id);
    }

    return (
        <div className="properties">
            <List dense={false}>
            {list.map((property) => {
                return (
                    <ListItem
                        className="list-item"
                        key={property.id}
                        onClick={()=>{
                            handleRequest(property.id);
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <img width='40px' height='40px' alt="" src={estate} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={property.name}
                            secondary={property.location}
                        />
                    </ListItem>
                )
            })}
            </List>
        </div>
    )
}