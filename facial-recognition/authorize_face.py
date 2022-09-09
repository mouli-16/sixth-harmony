from compare_faces import compare_faces

  
known_faces = [
                ('swastik','./img/swastik.jpg'),
            ]
    
def face_rec(file):
    for name, known_file in known_faces:
        if compare_faces(known_file,file):
            return name
    return None
