import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const ProjectAvatar = ({icon, name}: any) => {
    return (
        <Avatar>
            {
                icon?
                    <AvatarImage src={icon} alt={name} />
                    :
                    <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
            }
        </Avatar>
    );
}


export default ProjectAvatar