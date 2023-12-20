import { AccordionItems } from "./AccordionItems";
import { list} from "./list";
import './style.css';

export const Accordion = () => {
    return (
        <div>
            {list.map (( item, index) => 
                <AccordionItems key={index} title = {item.title} content = {item.content} />
            )}
        </div>
    )
}