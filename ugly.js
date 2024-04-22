

const
images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"]



    row = []
    for _ in range(3):
        image = random.choice(images)
        row.append(image)
    return row

 
  
        print(" | ".join(row))


slot_machine = [generate_row() in range(3)]
display_slot_machine(slot_machine)

 update_cell(row, col):
    image = random.choice(images)
    slot_machine[row][col] = image



  
    row = int(input("Enter the row number (0-9): "))
    col = int(input("Enter the column number (0-9): "))
    
    update_cell(row, col)
    
  
    display_slot_machine(slot_machine)