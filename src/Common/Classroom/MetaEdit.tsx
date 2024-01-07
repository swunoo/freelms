import ReactDOM from "react-dom";
import { FullBtn } from "../Buttons";
import { Input } from "../Inputs";
import { ClassUnit, classType, sectionType } from "./Menu";
import { getInputValue } from "../Utils";

export function ClassMetaEdit({classData, toView}: {classData: classType, toView: ()=>void}){

    const handleConfirm = () => {

        // Update CourseTitle
        classData.title = getInputValue('course_title');

        // Remove deleted Units
        const displayedUnitsOnly = (unit: ClassUnit) => document.getElementById("unit_"+unit.id);
        classData.units = classData.units.filter(displayedUnitsOnly);

        // Collect and loop through displayed Units
        const units = document.getElementsByClassName('unit_unit');
        for(const unit of units){

            // Extract id, title, and existence of each Unit
            const id = unit.id.substring(5);
            const title = getInputValue('unit_title', unit)
            const currentUnits = classData.units.filter((u: ClassUnit) => u.id === id);

            // If Unit alreay exists, UPDATE
            if(currentUnits.length > 0){
                const existingUnit = currentUnits[0];
                existingUnit.title = title;
                const displayedSectOnly = (sec: sectionType) => document.getElementById("sect_"+sec.id);
                existingUnit.sections = existingUnit.sections.filter(displayedSectOnly);

                const existingSectionIds: string[] = existingUnit.sections.map((sec:sectionType) => sec.id);
                [...unit.getElementsByClassName('unit_section')].forEach(sectionEle => {
                    const id = sectionEle.id.substring(5);
                    if(!existingSectionIds.includes(id)){
                        const newSection = {id: id, type: 'lecture', title: 'New Section'}
                        existingUnit.sections.push(newSection);
                    }
                })

            // If Unit doesn't exist, CREATE
            } else {
                const sections = [...unit.getElementsByClassName('unit_section')]
                                .map(sectionEle => {
                                    const id = sectionEle.id.substring(5);
                                    return {id: id, type: 'lecture', title: 'New Section'}
                                })
                classData.units.push({id, title, sections})
            }
        }

        toView();
    }

    const handleCancel = () => {
        toView();
    }

    const addUnit = () => {
        const newUnit = {id: Date.now().toString().substring(5), title: '', sections: []};
        const parent = document.createElement('div');
        ReactDOM.render(<Unit unit={newUnit}/>, parent);
        document.getElementById('unit_container')?.appendChild(parent);
    }

    const deleteUnit = (id: string) => {
        document.getElementById("unit_"+id)?.remove();
    }

    const addSection = (id: string) => {
        const newSection = {id: Date.now().toString().substring(5), type: 'lecture', title: '[Change Title in Details]', content: ''}
        const parent = document.createElement('div');
        ReactDOM.render(<Section section={newSection}/>, parent);
        document.getElementById('section_container_'+id)?.appendChild(parent);
    }

    const deleteSection = (id: string) => {
        document.getElementById("sect_"+id)?.remove();
    }

    function Unit ({unit}: {unit: ClassUnit}){
        return (
            <div id={"unit_"+unit.id} className="rounded-xl py-3 px-5 bg-gray-200 shadow my-5 unit_unit">
                <Input label="Unit Title" name="unit_title" value={unit.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn onclick={() => deleteUnit(unit.id)} label="Delete Unit"/>
                <FullBtn onclick={() => addSection(unit.id)} label="Add Section"/>
            </div>
            <ul id={"section_container_"+unit.id} className="ml-8">
                    {unit.sections.map(section => <Section section={section} />)}
            </ul>
            </div>
        )
    }

    function Section ({section}: {section: sectionType}){
        return (
            <li
            id={"sect_"+section.id}
            className="list-decimal my-3 flex justify-between unit_section"
            >
                <span>{section.title}</span>
                <FullBtn onclick={() => deleteSection(section.id)} label="Delete Section"/>
            </li>
        )
    }

    return (
        <div className="">
            <Input label="Course Title" name="course_title" value={classData.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn onclick={addUnit} label="Add Unit"/>
            </div>
            <div id="unit_container">
                {classData.units.map((unit: ClassUnit) => <Unit unit={unit} />)}
            </div>
            <div className="flex gap-5 p-5 my-5 justify-end border-t">
                <FullBtn label="Cancel" onclick={handleCancel}/>
                <FullBtn label="Confirm" onclick={handleConfirm} />
            </div>
        </div>
    )
}