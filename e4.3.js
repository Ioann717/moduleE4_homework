# Задание №1

def print_own_properties(obj):
    if isinstance(obj, dict):
        for key, value in obj.items():
            print(f"Key: {key}, Value: {value}")
    else:
        for key in dir(obj):
            if not callable(getattr(obj, key)) and not key.startswith("__"):
                value = getattr(obj, key)
                print(f"Key: {key}, Value: {value}")

// Используем:

sample_object = {
    "name": "Ioann",
    "age": 27,
    "city": "Krasnodar"
}

class SampleClass:
    def __init__(self):
        self.property1 = "Value 1"
        self.property2 = "Value 2"

sample_instance = SampleClass()

print("Dictionary:")
print_own_properties(sample_object)

print("Class instance:")
print_own_properties(sample_instance)


# Задание №2

python
def check_property(string, obj):
    if hasattr(obj, string):
        return True
    else:
        return False


// Используем:

python
class MyClass:
    def __init__(self):
        self.my_property = "Hello"

obj = MyClass()
print(check_property("my_property", obj))  # Output: True
print(check_property("other_property", obj))  # Output: False


# Задание №3

function createEmptyObject() {
  return Object.create(null);
}

const newObj = createEmptyObject();
console.log(Object.getPrototypeOf(newObj));