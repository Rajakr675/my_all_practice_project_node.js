# jitne vi even odd ha sab ko ek list me append karna ha.

# lis=[]
# for i in range (1,21):
#     if i%2==0:
#         lis.append(i)
# print(lis)


# how to use  list comprehantion;

# lis=[i for i in range (1,21) if i%2==0]
# print(lis)



# dictonary ke value change karna ha
# dic={"raja":1,"akash":2}
# dic["akash"]=5
# print(dic)



# # variable swipe.
# a=5
# b=2
# a,b=b,a
# print(a,b)



# how to use function.
# def even (num):
#     lis=[]
#     for i in range(1,num):
#         if i%2==0:
#             lis.append(i)
#     print(lis)
# num=20
# even(num)


# how to delete data in dictonary;

# dic={"rr":1,"aa":2,"vv":3,"jj":4}
# del[dic["vv"]]
# print(dic)



# how to acces i dictoneary data.


# dict1 = { "node1" : { "name" : "Emily", "year" : 2004 }, "node2" : { "name" : "John", "year" : 2023 }, "node3" : { "Ravi" : "Emil", "year" : {"new":4453} } } 

# dict1["node3"]["year"]["new"]=2024
# print(dict1)




#  .....febonacci seris......

# n=int(input("enter  :- "))
# x=0
# y=1
# z=0
# lis=[]
# while z<n :
#     # print(z)
#     lis.append(z)
#     x=y
#     y=z
#     z=x+y
# print(lis)


#  prime number .....

# n=int(input("enter :- "))
# count=0
# i=1
# while i<=n:
#     if n%i==0:
#         count+=1
#     i+=1
# if count==2:
#     print("prime number")
# else:
#     print("not prime")

# how to remove duplicates.in list

# a=[1,2,3,3,4,5,6,6,6,7]
# b=[]
# for i in a:
#     if i not in b:
#         b.append(i)
# print(b)


# how to list open.

# a=[[1,2,3,5],[6,7,8,9],[10,11,12,]]
# b=[ ]
# for i in a:
#     b.extend(i)
# print(b)



# how to find max mini.

# a=[5,8,4,7,9,4,2,8]
# a.sort()
# print(a[7])


# print(min(a))


# how to add in dictonaray in data.

# car = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }

# car.update({"color": "White","raja":2})

# print(car)


# # changing keys of dictionary
# dic['akash'] = dic['akshat']
# del dic['akshat']


# # printing final result
# print("final dictionary", str(dic))



# find pair. 30
# 

# a=[10,11,12,13,14,17,18,19]
# b=[]
# for i in a:
#     for j in a:
#         if i+j==30:
#             b.append([i,j])
#             a.remove(i)
# print(b)

# square print in lisrt comprehaction.

# def lis (n):
#     return [i*i for i in range (1,n+1)]
# print(lis(15))

# print("dfghjk")






# if you want specific id in csv file '

# import pandas as pd

# df = pd.read_csv('/home/raja/Desktop/all_projects/instruments (1).csv')

# print(df.loc[4]) 



# if you want uper se 10 then this .

# df = pd.read_csv('/home/raja/Desktop/all_projects/instruments (1).csv')

# print(df.head(3)) 

# if you want dwon side se then tail 

# df = pd.read_csv('/home/raja/Desktop/all_projects/instruments (1).csv')

# print(df.tail(2)) 



# Q.) input=[6,3,4,5]
# output=[6,6,6,6]
# ans:-

# a=[6,3,4,5]
# c=[]
# for i in range(len(a)):
#     c.append(a[0])
# print(c)