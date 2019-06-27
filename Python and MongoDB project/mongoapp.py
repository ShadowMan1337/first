print("\n*********WELCOME TO MONGODB PROJECT - RESTAURANT MANAGEMENT SYSTEM********\n\n\tcreated by Ankush, Melwin, and Archith.\n")

import pymongo
myclient = pymongo.MongoClient("mongodb://localhost:27017/")

username = input("Enter Uername: ")  
if username == "username" :
    print ("Now type password: ")

else :
    print ("please try another user name. This user name is incorrect")

password = input ("Password: ")
if password  == "password" :
    print ("ACCESS  GRANTED")
    print ("<<Welcome Admin>>")
    
else :
    print ("INTRUDER ALERT !!!!" , "SYSTEM LOCKED")
    exit()

def main():
        main_menu()

def main_menu():
            ch = 1
            while(ch):
                    selection = input('\nSelect: \n\t1. INSERT \n\t2. UPDATE \n\t3. READ \n\t4. DELETE \n\t5. VIEW DATABASES \n\t6. VIEW COLLECTIONS\n\t7. EXIT\n')
        
                    if selection == '1':
                            insert()
                    elif selection == '2':
                            update()
                    elif selection == '3':
                            read()
                    elif selection == '4':
                            delete()
                    elif selection == '5':
                            print(myclient.list_database_names())
                    elif selection == '6':
                            db_name = input('Enter the database name:')
                            if db_name in myclient.list_database_names():
                                    db = myclient[db_name]
                                    print(db.list_collection_names())
                    elif selection == '7':
                            ch = 0
                    else:
                            print('\n INVALID SELECTION \n')

def insert():
            print(myclient.list_database_names())
            mydb = str(input("Enter database name(select from the above list or create a new database):"))
            db = myclient[mydb]
            print(db.list_collection_names())
            
            while(1):
                    selection1 = input('\nInsert into 1. Employees 2. Food Menu 3. Beverages Menu 4. Branches 5. Return to main menu\n') 
                    if selection1 == '1':
                        try:
                                x = input('Enter Employee ID :')
                                y = input('Enter Name :')
                                z = input('Enter Age :')
                                w = input('Enter Phone:')
                                l = input('Enter Salary:')
                                m = input('Enter Privilege:')

                                db.Employees.insert_one(
                                {
                                        "id": x,
                                        "name": y,
                                        "age": z,
                                        "phone": w,
                                        "salary": l,
                                        "privilege": m
                            })
                                print ('\nInserted data successfully\n')
                        except Exception as e:
                                print(e)

                    elif selection1 == '2':
                        try:
                                x = input('Enter Serial Number :')
                                y = input('Enter Name :')
                                z = input('Enter Type :')
                                w = input('Enter Expiry Date:')
                                l = input('Enter stock info:')
                                m = input('Enter price:')
                                
                                db.Foods.insert_one(
                                {
                                        "serial number": x,
                                        "name": y,
                                        "type": z,
                                        "expiry date": w,
                                        "stock": l,
                                        "price": m
                            })
                                print ('\nInserted data successfully\n')
                        except Exception as e:
                                print (e)

                    elif selection1 == '3':
                        try:
                                x = input('Enter Batch number :')
                                y = input('Enter Name :')
                                z = input('Enter Number of Medicines :')
                                

                                db.Beverages.insert_one(
                                {
                                    "batch number": x,
                                    "name": y,
                                    "number of medicines": z,
                                    
                                })
                                print ('\nInserted data successfully\n')
                        except Exception as e:
                                print(e)

                    elif selection1 == '4':
                        try:
                                x = input('Enter ID :')
                                y = input('Enter Name:')
                                z = input('Enter Age :')
                                w = input('Enter Medicine Name:')
                                l = input('Enter Phone')
                                m = input('Enter Total amount paid:')
                                
                                db.Branch.insert_one(
                                {
                                        "id": x,
                                        "name": y,
                                        "age": z,
                                        "medicine name": w,
                                        "phone":l,
                                        "amount":m
                                })
                                print ('\nInserted data successfully\n')
                        except Exception as e:
                                print(e)
                    elif selection1 == '5':
                        main_menu()

            else: print('\nINVALID SELCTION')

def read():
            print(myclient.list_database_names())
            mydb = str(input("Enter database name:"))
            db = myclient[mydb]
            print(db.list_collection_names())
            while(1):
                    selection1 = input('\nRead from 1. Employees 2. Food Menu 3. Beverages Menu 4. Branches 5. Return to main menu\n') 
                    
                    if selection1 == '1':
                        try:
                            Col = db.Employees.find()
                            print ('\n All data from Employees Database \n')
                            for i in Col:
                                print(i)
                        except Exception as e:
                            print(e)

                    elif selection1 == '2':
                        try:
                            Col = db.Foods.find()
                            print ('\n All data from Food Menu \n')
                            for i in Col:
                                print(i)
                        except Exception as e:
                            print(e)
                    elif selection1 == '3':
                        try:
                            Col = db.Beverages.find()
                            print ('\n All data from Beverages Menu Database \n')
                            for i in Col:
                                print(i)
                        except Exception as e:
                            print(e)

                    elif selection1 == '4':
                        try:
                            Col = db.Branch.find()
                            print ('\n All data from Branch Database \n')
                            for i in Col:
                                print(i)
                        except Exception as e:
                            print(e)
                            
                    elif selection1 == '5':
                        main_menu()

            else: print('\nINVALID SELCTION')

def update():
         print(myclient.list_database_names())
         mydb = str(input("Enter database name:"))
         db = myclient[mydb]
         print(db.list_collection_names())
         while(1):
            selection1 = input('\nUpdate 1. Employees 2. Food Menu 3. Beverages Menu 4. Branches 5. Return to main menu\n') 
                            
            if selection1 == '1':
                try:
                    x = input('Enter ID:')
                    y = input('Enter Name to update:')
                    z = input('Enter Age to update:')
                    m = input('Enter phone:')
                    l = input('Enter salary to update:')
                    w = input('Enter Privilege to update:')
                    

                    db.Employees.update_one(
                        {"id": x},
                            {
                                "$set": {
                                    "name":y,
                                    "age":z,
                                    "phone":m,
                                    "salary":l,
                                    "privilege":w,
                                    
                            }
                    })
                    print ("\nRecords updated successfully\n")
                except Exception as e:
                    print(e)

            elif selection1 == '2':
                   try:
                       x = input('\nEnter Serial Number: ')
                       y = input('\nEnter Name to update: ')
                       z = input('\nEnter Type to update: ')
                       w = input('\nEnter Expiry Date to update: ')
                       m = input('\nEnter Stock info: ')
                       l = input('\nEnter Price to update: ')

                       db.Foods.update_one(
                           {"serial number": x},
                               {
                                   "$set": {
                                       "name":y,
                                       "type":z,
                                       "expiry date":w,
                                       "stock info":m,
                                       "price":l
                               }
                    })
                       print("\nRecords updated successfully\n")
                   except Exception as e:
                    print(e)

            elif selection1 == '3':
                try:
                    x = input('\nEnter Batch number:\n')
                    y = input('\nEnter Name to update:\n')
                    z = input('\nEnter Number of medicines to update:\n')

                    db.Beverages.update_one(
                        {"batch number": x},
                            {
                                "$set": {
                                    "name":y,
                                    "number of medicines":z,
                            }
                    })
                    print ("\nRecords updated successfully\n")    
                except Exception as e:
                    print(e)

            elif selection1 == '4':
                try:
                    x = input('\nEnter ID to update: ')
                    y = input('\nEnter Name to update: ')
                    z = input('\nEnter Age to update: ')
                    w = input('\nEnter Medicine Name to update: ')
                    m = input('\nEnter Phone: ')
                    l = input('\nEnter Total amount paid: ')
                    
                    db.Branch.update_one(
                        {"id": x},
                            {
                                "$set": {
                                    "name":y,
                                    "age":z,
                                    "medicine name":w,
                                    "phone":m,
                                    "amount":l
                            }
                    })
                    print ("\nRecords updated successfully\n")
                except Exception as e:
                    print(e)
                    
            elif selection1 == '5':
                        main_menu()

            else: print('\nINVALID SELCTION')


def delete():
        print(myclient.list_database_names())
        mydb = str(input("Enter database name:"))
        db = myclient[mydb]
        print(db.list_collection_names())
        while(1):
            selection1 = input('\nDelete from 1. Employees 2. Food Menu 3. Beverages Menu 4. Branches 5. Return to main menu\n') 
                    if selection1 == '1':
                     try:
                        x = input('\nEnter ID to delete: ')
                        db.Employees.delete_many({"id":x})
                        print ('\nDeletion successful\n') 
                     except Exception as e:
                        print(e)

            elif selection1 == '2':
                     try:
                        x = input('\nEnter Serial number to delete: ')
                        db.Foods.delete_many({"serial number":x})
                        print ('\nDeletion successful\n') 
                     except Exception as e:
                        print(e)

            elif selection1 == '3':
                     try:
                        x = input('\nEnter Batch number to delete: ')
                        db.Beverages.delete_many({"batch number":x})
                        print ('\nDeletion successful\n') 
                     except Exception as e:
                        print(e)

            elif selection1 == '4':
                     try:
                        x = input('\nEnter ID to delete\n')
                        db.Branch.delete_many({"id":x})
                        print ('\nDeletion successful\n') 
                     except Exception as e:
                        print(e)
                        
            elif selection1 == '5':
                        main_menu()

            else: print('\nINVALID SELCTION')

if __name__ == "__main__":
        main()

                    

        
