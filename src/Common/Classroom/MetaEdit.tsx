import ReactDOM from "react-dom";
import { FullBtn } from "../Buttons";
import { Dropdown, Input } from "../Inputs";
import { ClassUnit, classType, sectionType } from "./Menu";
import { getInputValue, getSelectValue } from "../Utils";
import { ClassData } from "../../DataAccess";

export function ClassMetaEdit({classData, styling, toView}: {classData: classType, styling: any, toView: ()=>void}){

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
                    const type = getSelectValue('type', sectionEle);
                    if(existingSectionIds.includes(id)){
                        const existingSection = existingUnit.sections.filter((sec:sectionType) => sec.id === id)[0];
                        existingSection.type = type;
                        if(type === 'Lecture'){
                            delete existingSection.quizzes;
                            existingSection.content = "";
                        }
                        else {
                            delete existingSection.content;
                            existingSection.quizzes = [];
                        }

                    } else {
                        const newSection = {id: id, type: type, title: 'New Section'}
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

        const classObj = new ClassData();
        classObj.updateClass(classData);
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
            <div id={"unit_"+unit.id} className={"unit_unit " + styling.unitContainer}>
                <Input styling={styling.unitTitle} label="Unit Title" name="unit_title" value={unit.title} />
                <div className="flex justify-end gap-3 py-3 border-b">
                    <FullBtn styling={styling.btnDeleteUnit} onclick={() => deleteUnit(unit.id)} label="Delete Unit"/>
                    <FullBtn styling={styling.btnAddSection} onclick={() => addSection(unit.id)} label="Add Section"/>
                </div>
                <ul id={"section_container_"+unit.id} className="md:ml-8">
                        {unit.sections.map(section => <Section section={section} />)}
                </ul>
            </div>
        )
    }

    function Section ({section}: {section: sectionType}){
        const typeOptions = [
            {value: 'lecture', text: "Lecture"},
            {value: 'quiz', text: "Quiz"}
        ]
        return (
            <li
            id={"sect_"+section.id}
            className={"unit_section "+styling.sectionContainer}
            >
                <span className={styling.sectionTitle}>{section.title}</span>
                <div className="flex gap-5">
                    <Dropdown styling={styling.sectionType} name="type" options={typeOptions} value={section.type}/>
                    <FullBtn styling={styling.btnDeleteSection} onclick={() => deleteSection(section.id)} label="Delete Section"/>
                </div>
            </li>
        )
    }

    return (
        <div className="">
            <Input styling={styling.courseTitle} label="Course" name="course_title" value={classData.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn styling={styling.btnAddUnit} onclick={addUnit} label="Add Unit"/>
            </div>
            <div id="unit_container">
                {classData.units.map((unit: ClassUnit) => <Unit unit={unit} />)}
            </div>
            <div className="flex gap-5 p-5 my-5 justify-end border-t">
                <FullBtn styling={styling.btnCancel} label="Cancel" onclick={handleCancel}/>
                <FullBtn styling={styling.btnConfirm} label="Confirm" onclick={handleConfirm} />
            </div>
        </div>
    )
}