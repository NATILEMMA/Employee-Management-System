import frappe
from frappe.utils import getdate
import json
import os, sys


def writejs(data):
    try:
        json_object = json.dumps(data)
        completeName = os.path.join("/home/nati/frappe-bench/apps/demo_app/demo_app/www/employee_dashboard", "try.json")
        file = open(completeName, "w") 
        file.write(json_object) 
        file.close() 
        msg = "file written successfully"
        print(msg)
        return True

    except FileNotFoundError:
      msg = "Sorry, the file does not exist."
      print(msg) # Sorry, the file John.txt does not exist.
      return False
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

def get_context(context):
        context.property = frappe.get_doc("Employee","HR-EMP-00011" )
        context.date = frappe.utils.getdate()
        context.data = frappe.db.get_list('Attendance',
            filters={
                'employee_name': 'Natnael Lemma'
                     },
            fields=['status', 'attendance_date'],
            order_by='attendance_date',
            as_list=False)

        context.hello = frappe.db.sql(""" SELECT status,  DATE_FORMAT(attendance_date, '%m-%d-%Y') FROM `tabAttendance` WHERE (employee_name='Natnael Lemma')""", as_dict=0)
    
        context.write  = writejs(context.hello)
                    
        return context


#frappe.db.get_list(doctype, filters, or_filters, fields, order_by, group_by, start, page_length)


#SELECT employee_name,status,attendance_date,creation  FROM `tabAttendance` WHERE (employee_name='Natnael Lemma');




#frappe.db.get_list('Task', filters=[[
#    'date', 'between', ['2020-04-01', '2021-03-31']
#]])
#