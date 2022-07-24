import { QueryError, RowDataPacket } from "mysql2";
import express from 'express';
import { time } from "console";

const regexLib = require("../util/regexLibrary");
const db = require("../database/db_config");

/**
 *  @description 
 * create a new appointment
 * 
 */
export const addAppointment = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    
    const { date, time, note } = req.body;

    if(!date || !time || !note) return next({message: "Fill out all the fields please!"})
    //@ts-ignore
    const userId = req.user.user_id;

    const sql = `insert into appointment (time, date, user_id, note) values (?, ?, ?, ?)`;

    db.query(sql, [time, date, userId, note], (error: QueryError, result: RowDataPacket[]) => {
        if (error) return next({ message: error });
        res.status(200).json({ message: `Appointment added successfully` });
        next();
    });
}

/**
 * @description
 * delete an appointment
 */
 export const deleteAppointment = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    
     const appointmentId: number = Number(req.params.id);

     if (!appointmentId) return next({ message: "No appointment id sent" });
    //@ts-ignore
    const userId = req.user.user_id;

     const sql = `delete from appointment where appointment_id = ? and user_id = ?`;
     const checkAppointmentSql = `select * from appointment where appointment_id = ?`;
     
     db.query(checkAppointmentSql, [appointmentId, userId], (error: QueryError, result: RowDataPacket[]) => {
         if (result.length < 1) return next({ message: "There is no such appointment to delete!" });


         db.query(sql, [appointmentId, userId], (error2: QueryError, result2: RowDataPacket[]) => {
            if (error2) return next({ message: error2 });
            res.status(200).json({ message: `Your appointment has been deleted successfully!`});
            next();
         });
         
     });
 
 }


 /**
  * @description
  * Get all the current user appointment
  */
  export const getAllAppointments = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    
    //@ts-ignore
    const userId = req.user.user_id;

    const sql = `select * from appointment where user_id = ?`;

    db.query(sql, [userId], (error: QueryError, result: RowDataPacket[]) => {
        if (error) return next({ message: error });
        res.status(200).json(result);
        next();
    });
  }

  /**
   * @description
   * Get a specific appointments
   */
   export const getSpecificAppointment = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction) => {
    
    //@ts-ignore
       const userId = req.user.user_id;
       const appointmentId: number = Number(req.params.id);

    const sql = `select * from appointment where user_id = ? and appointment_id = ?`;

    db.query(sql, [userId, appointmentId], (error: QueryError, result: RowDataPacket[]) => {
        if (error) return next({ message: error });
        res.status(200).json(result);
        next();
    });
   }
  
   /**
    * Patching appointment
    * @description patch an appointment by id
    */
export const updateAppointment = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    
    const appId = req.params.id;
    //@ts-ignore
    const userId = req.user.user_id;
    let {note, time, date } = req.body;
    
    if (!time || !date) return next({ message: 'there are missing field' });

    let updateSql: string;

    if (!note || note === undefined) {
        updateSql = `update appointment set time = ?, date = ?`;
    } else {
        updateSql = `update appointment set note = ?, time = ?, date = ?`;
    }

    if (!appId) return next({ message: `Id appointment required!!`});

    const appExistSql = `select * from appointment where appointment_id = ?`;
    const belongsToCurrSql = `select users.user_id, appointment.appointment_id 
    from users inner join appointment
    on appointment.user_id = users.user_id where appointment.appointment_id = ?`;

    db.query(appExistSql, [appId], (error: QueryError, result: RowDataPacket[]) => {
        if (error) return next({ message: error});
        if (result.length < 1) return next({ message: `No appointment found for id ${appId}` });
        
        db.query(belongsToCurrSql, [appId], (error2: QueryError, result2: RowDataPacket[]) => {
            if (error2) return next({ message: error2 });
            if (result2.length < 1) return next({ message: "The appointment, you are trying to edit is not yours!!" });

            if (!note || note === undefined) {
                db.query(updateSql, [time, date], (error3: QueryError, result3: RowDataPacket[]) => {
                    if (error3) return next({ message: error3 });
                    return res.status(200).json({message: 'Appointment successfully updated with no new note!'})
                });
            } else {
                db.query(updateSql, [note, time, date], (error3: QueryError, result3: RowDataPacket[]) => {
                    if (error3) return next({ message: error3 });
                        return res.status(200).json({ message: 'Appointment successfully updated' });
                    });
                }
        });
    });
    
 }