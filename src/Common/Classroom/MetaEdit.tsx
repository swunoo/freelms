import { FullBtn } from "../Buttons";
import { Input } from "../Inputs";
import { ClassUnit, classType } from "./Menu";

export function ClassMetaEdit({classData}: classType){
    return (
        <div className="">
            <Input label="Course Title" name="section_title" value={classData.title} />
            <div className="flex justify-end gap-3 py-3 border-b">
                <FullBtn label="Add Unit"/>
            </div>
            {classData.units.map((unit: ClassUnit) => (
                <div className="rounded-xl py-3 px-5 bg-gray-200 shadow my-5">
                    <Input label="Unit Title" name="section_title" value={unit.title} />
                <div className="flex justify-end gap-3 py-3 border-b">
                    <FullBtn label="Delete Unit"/>
                    <FullBtn label="Add Section"/>
                </div>
                <ul className="ml-8">
                        {unit.sections.map(section => (
                            <li
                            className="list-decimal my-3 cursor-pointer flex justify-between"
                            >
                                <span>{section.title}</span>
                                <FullBtn label="Delete Section"/>
                            </li>
                        ))
                        }
                </ul>
                </div>

            ))}
        </div>
    )
}