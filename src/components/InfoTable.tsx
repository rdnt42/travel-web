import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {IRouteResponse} from "../interface/response/IRouteResponse";

export const InfoTable = (props: { items: Array<IRouteResponse> | undefined }) => {
    const columns = [
        {field: 'transportPrice.departureCity', header: 'Город отправления'},
        {field: 'transportPrice.arrivalCity', header: 'Город прибытия'},
        {field: 'transportPrice.cost', header: 'Стоимость'},
        {field: 'transportPrice.comfortTypeName', header: 'Тип комфорта'},
        {field: 'transportPrice.seatTypeName', header: 'Тип места'},
        {field: 'transportPrice.travelTime', header: 'Время поездки'}
    ];

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header}/>;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={props.items} responsiveLayout="scroll">
                    {dynamicColumns}
                </DataTable>
            </div>
        </div>
    );
}